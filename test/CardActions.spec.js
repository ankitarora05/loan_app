import { mount } from '@vue/test-utils'
import CardAction from '@/components/card-actions/index.vue'

describe('CardAction', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(CardAction)
        expect(wrapper.vm).toBeTruthy()
    })
})