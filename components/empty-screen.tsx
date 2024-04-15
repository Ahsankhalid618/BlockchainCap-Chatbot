import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-dark-blue p-8">
        <h1 className="text-lg font-semibold text-center">
          Welcome to BlockchainCap LangChain LLM !
        </h1>
        <p className="leading-normal text-muted-foreground text-justify">
          Leveraging the power of the Langchain LLM (Large Language Model), this platform offers intuitive and intelligent assistance to users seeking up-to-date and comprehensive information on various cryptocurrencies. By integrating with the Ethereum blockchain model, BlockchainCap Ai Assistance ensures secure and verifiable transactions, making it a reliable source for users to access cryptocurrency data.
        </p>
        
      </div>
    </div>
  )
}
