/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;
    let current = 1;
    for (let element of arr) {
      if (Array.isArray(element)) {
        current += this.calculateDepth(element);
      }

      max = current > max ? current : max;
      current = 1;
    }

    return max;
  }
}
