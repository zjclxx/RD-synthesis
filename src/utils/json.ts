/**
 * 下载JSON数据为文件
 *
 * @param json - 要下载的JSON字符串
 * @param filename - 下载文件的名称（可选，默认为'data.json'）
 *
 * 该函数将传入的JSON字符串转换为Blob对象，并通过创建一个临时的<a>标签来触发浏览器下载。
 * 下载完成后会清理DOM中的临时元素并释放URL对象。
 */
export function downloadJson(json: string, filename: string) {
  filename = filename || "data.json";
  filename = filename.endsWith(".json") ? filename : `${filename}.json`;
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename); // 设置下载的文件名
  document.body.appendChild(link);
  link.click(); // 模拟点击下载
  document.body.removeChild(link); // 清理DOM
  URL.revokeObjectURL(url); // 释放URL对象
}
