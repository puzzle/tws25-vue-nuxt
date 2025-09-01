import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import GroceriesList from './GroceriesList.vue'

test('renders groceries', async () => {
  const wrapper = mount(GroceriesList, {
    props: { list: ['one', 'two']},
  })
  
  expect(wrapper.findAll('[data-testid=item]').map(el => el.text())).toEqual(['one', 'two'])
})
