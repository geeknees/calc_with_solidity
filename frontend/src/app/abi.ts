export const abi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    name: 'getMultiplicationValue',
    inputs: [
      { name: 'row', type: 'uint256', internalType: 'uint256' },
      { name: 'column', type: 'uint256', internalType: 'uint256' }
    ],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'getTable',
    inputs: [],
    outputs: [
      { name: '', type: 'uint256[12][12]', internalType: 'uint256[12][12]' }
    ],
    stateMutability: 'view'
  },
  {
    type: 'function',
    name: 'table',
    inputs: [
      { name: '', type: 'uint256', internalType: 'uint256' },
      { name: '', type: 'uint256', internalType: 'uint256' }
    ],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view'
  }
] as const
