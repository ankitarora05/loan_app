import { mount } from '@vue/test-utils'
import AppNav from '@/components/app-nav/index.vue'

describe('AppNav', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppNav)
    expect(wrapper.vm).toBeTruthy()
  })
})
