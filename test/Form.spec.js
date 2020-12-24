import { shallowMount, mount } from '@vue/test-utils';
import Form from '../src/views/Form.vue';

test('Form', () => {
  const wrapper = shallowMount(Form)

  wrapper.setData({ name: ' '.repeat(0) })
  wrapper.setData({ surname: ' '.repeat(0) })
  wrapper.setData({ email: ' '.repeat(0) })
  wrapper.setData({ text: ' '.repeat(0) })

  expect(wrapper.find('.invalid-feedback').exists()).toBe(true)

  wrapper.setData({ name: 'Егор' })
  wrapper.setData({ surname: 'Громов' })
  wrapper.setData({ email: 'mail@mail.ru' })
  wrapper.setData({ text: 'Test' })

  expect(wrapper.find('.invalid-feedback').exists())

  wrapper.find('button').trigger('click')

  wrapper.setData({ name: ' '.repeat(6) })
  wrapper.setData({ surname: ' '.repeat(6) })

  expect(wrapper.find('.invalid-feedback').exists()).toBe(true)

  wrapper.setData({ name: 'Егор' })
  wrapper.setData({ surname: 'Громов' })

  expect(wrapper.find('.invalid-feedback').exists())

  wrapper.setData({ name: ' '.repeat(16) })
  wrapper.setData({ surname: ' '.repeat(16) })

  expect(wrapper.find('.invalid-feedback').exists()).toBe(true)

  wrapper.setData({ name: 'Егор' })
  wrapper.setData({ surname: 'Громов' })

  expect(wrapper.find('.invalid-feedback').exists())
})