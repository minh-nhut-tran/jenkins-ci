import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';

describe('<App />', () => {
  it('renders HelloWorld component', () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent(HelloWorld).exists()).toBe(true);
  });

  it('passes the correct message to HelloWorld', () => {
    const wrapper = mount(App);
    const helloWorldComponent = wrapper.findComponent(HelloWorld);
    expect(helloWorldComponent.props('msg')).toBe('Vite + Vue');
  });

  it('renders two logo images', () => {
    const wrapper = mount(App);
    const logos = wrapper.findAll('.logo');
    expect(logos.length).toBe(2);
  });

  it('renders the Vite logo with the correct source and link', () => {
    const wrapper = mount(App);
    const viteLogo = wrapper.find('a[href="https://vite.dev"] img[alt="Vite logo"]');
    expect(viteLogo.exists()).toBe(true);
  });

  it('renders the Vue logo with the correct source and link', () => {
    const wrapper = mount(App);
    const vueLogo = wrapper.find('a[href="https://vuejs.org/"] img[alt="Vue logo"]');
    expect(vueLogo.exists()).toBe(true);
    expect(vueLogo.attributes('src')).toBe('/src/assets/vue.svg');
  });

  it('applies the logo class to both images', () => {
    const wrapper = mount(App);
    const logos = wrapper.findAll('img.logo');
    expect(logos.length).toBe(2);
  });

  it('applies the vue class to the Vue logo', () => {
    const wrapper = mount(App);
    const vueLogo = wrapper.find('img.vue');
    expect(vueLogo.exists()).toBe(true);
  });

  it('renders the div container', () => {
    const wrapper = mount(App);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});