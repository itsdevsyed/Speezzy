import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
  return (
    <div>
    <Button className='w-22 h-22' variant={'destructive'}>Button</Button>
    <Button variant={'default'}>Button</Button>
    <Button variant={'ghost'}>Button</Button>
    <Button variant={'link'}>Button</Button>
    <Button variant={'outline'}>Button</Button>
    <Button variant={'secondary'}>Button</Button>
    </div>
  )
}

