import { expect, test } from 'vitest'
import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import Commits from '../components/Commits.jsx'

test('Views commit details has repo URL', async () => {
  const component = render(<Commits />) 
  
 const button = await waitFor(() => component.getAllByText('View commit details'))
 button.map(item => {
   expect(item.href).toContain('https://github.com/mollgerman/Be-Social/commit') 
 })
})

test('Get full sha is rendering sha', async () => {
  const component = render(<Commits />)
  const shaAnchorInnerHTMLLength = 397
  const sha = await waitFor(() => component.getAllByTitle('Copy full SHA'))
  sha.map(item => {
    expect(item.innerHTML).length(shaAnchorInnerHTMLLength)
  })
  
})