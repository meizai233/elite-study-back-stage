type Data = string | number;
export default function (xData: Data[], data: Data[]) {
  return {
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    legend: {
      data: ['销量'],
    },
    xAxis: {
      data: xData,
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data,
      },
    ],
  };
}

