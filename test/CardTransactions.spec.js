import { mount } from '@vue/test-utils'
import CardTransaction from '@/components/card-transactions/index.vue'

describe('CardTransaction', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(CardTransaction)
        expect(wrapper.vm).toBeTruthy()
    })
})