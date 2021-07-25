import { mount } from '@vue/test-utils'
import ApplyLoan from '@/components/apply-loan/index.vue'

describe('ApplyLoan', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(ApplyLoan)
        expect(wrapper.vm).toBeTruthy()
    })
})
