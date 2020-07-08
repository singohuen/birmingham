import React from "react";
import { Stage, Layer, Text, Rect } from "react-konva";
import useWindowInnerWidthAndHeight from "../hooks/useWindowInnerWidthAndHeight";
import getIncomeByLevel from "../helpers/getIncomeByLevel";

const Board = (props) => {
  const { G, ctx, moves } = props;
  console.log("G", G);
  const { cards, cities, players } = G;
  const draw = cards.filter((c) => c.where === "DRAW");
  const discard = cards.filter((c) => c.where === "DISCARD");
  const { buildings, money, incomeLevel } = players[ctx.currentPlayer];

  const { innerWidth, innerHeight } = useWindowInnerWidthAndHeight();
  const canvasWidth = innerWidth / 2;
  const canvasHeight = innerHeight - 100;

  const playerCards = cards.filter((card) => card.where === ctx.currentPlayer);
  const buildingTypes = [...new Set(buildings.map((b) => b.type))];

  return (
    <div
      style={{
        display: "grid",
        gridTemplate: "100px calc(100vh - 100px) / 1fr 1fr",
      }}
    >
      <header style={{ gridColumnStart: "span 2", display: "flex" }}>
        <div>Draw: {draw.length}</div>
        <div>Discard: {discard.length}</div>
      </header>

      <aside>
        {true && (
          <Stage width={canvasWidth} height={canvasHeight}>
            <Layer>
              {cities.map((city) => {
                const convertedX = (city.x * canvasWidth) / 60;
                const convertedY = (city.y * canvasHeight) / 60;

                return (
                  <>
                    <Text
                      x={convertedX}
                      y={convertedY}
                      text={city.name}
                      fontSize={8}
                      fill={city.colour}
                    />
                    {city.slots.map((slot, index) => (
                      <>
                        {/* <Rect
                          x={convertedX + index * 10}
                          y={convertedY + 10}
                          width={10}
                          height={10}
                          stroke={"black"}
                          strokeWidth={1}
                        /> */}
                        {/* <Text
                          x={convertedX + index * 10 + 2}
                          y={convertedY + 10 + 2}
                          text={slot.availableBuildings
                            .map((b) => b.substring(0, 1))
                            .join("/")}
                          fontSize={8}
                        /> */}
                      </>
                    ))}
                  </>
                );
              })}
            </Layer>
          </Stage>
        )}
      </aside>

      <main>
        <div>Hand: {playerCards.length}</div>
        <div>Money: {money}</div>
        <div>Income Level: {incomeLevel}</div>
        <div>Income: {getIncomeByLevel(incomeLevel)}</div>

        <button onClick={() => moves.loan({ player: "0", cardId: 31 })}>
          Loan
        </button>

        <button onClick={() => moves.pass({ player: "0", cardId: 5 })}>
          Pass
        </button>
        {false && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            {buildingTypes.map((type) => (
              <div key={type}>
                <div>{type}</div>
                <table>
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Cost</th>
                      <th>Earn</th>
                      <th>Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buildings
                      .filter((b) => b.type === type)
                      .sort((a, b) => a.level > b.level)
                      .map((building) => (
                        <tr key={building.level}>
                          <td>{building.level}</td>
                          <td>
                            {building.money} / {building.coal} / {building.iron}
                          </td>
                          <td>
                            {building.vp} / {building.income} /{" "}
                            {building.network}
                          </td>
                          <td>{building.quantity}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Board;
