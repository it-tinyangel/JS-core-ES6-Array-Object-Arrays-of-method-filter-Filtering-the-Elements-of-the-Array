let arr = [1, 'string', [3, 4], 5, [6, 7]];

const subarrays = arr.filter(item => Array.isArray(item));

console.log('Subarrays in an array:', subarrays);