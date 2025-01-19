interface NDAContentDisplayProps {
  content: string
}

export function NDAContentDisplay({ content }: NDAContentDisplayProps) {
  return (
    <div className='relative rounded-lg border bg-card'>
      <div className='max-h-[400px] overflow-y-auto p-6'>
        <div className='prose prose-sm dark:prose-invert'>
          <div className='whitespace-pre-wrap font-mono text-sm'>{content}</div>
        </div>
      </div>
    </div>
  )
}
