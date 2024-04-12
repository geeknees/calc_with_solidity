'use client'

import {
  useAccount,
  useConnect,
  useDisconnect,
  useReadContract,
  type BaseError
} from 'wagmi'
import { abi } from './abi'
import { useEffect, useState } from 'react'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const {
    data: table,
    error: errorTable,
    isPending
  } = useReadContract({
    abi,
    address: '0xa1e377259e039d3c1ac408cee0403dfe68b5d288',
    functionName: 'getTable'
  })

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const { data: cal } = useReadContract({
    abi,
    address: '0xa1e377259e039d3c1ac408cee0403dfe68b5d288',
    functionName: 'getMultiplicationValue',
    args: [BigInt(x), BigInt(y)]
  })

  const handleReadContract = (i: number, j: number) => {
    setX(i)
    setY(j)
  }

  useEffect(() => {
    console.log('table', table)
    console.log('cal', cal)
  }, [table, cal])

  if (isPending) return <div>Loading...</div>

  if (errorTable)
    return (
      <div>
        Error:{' '}
        {(errorTable as unknown as BaseError).shortMessage ||
          errorTable.message}
      </div>
    )

  return (
    <>
      <div>
        <h2>Multiplication Table</h2>
        <div>{cal && cal?.toString()}</div>
        <table>
          <tbody>
            {Array.from({ length: 12 }, (_, i) => (
              <tr key={i}>
                {Array.from({ length: 12 }, (_, j) => (
                  <td key={j}>
                    {
                      (table ?? '').toString().split(',').map(Number)[
                        i * 12 + j
                      ]
                    }
                    <br />
                    <button onClick={() => handleReadContract(i + 1, j + 1)}>
                      Calc with Contract
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type='button' onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type='button'
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  )
}

export default App
