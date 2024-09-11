import create from 'zustand';
import { nanoid } from 'nanoid';

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
	window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
	texture: 'dirt',
	cubes: getLocalStorage('cubes') || [],
	addCube: (x, y, z) => {
		set((state) => ({
			cubes: [
				...state.cubes,
				{
					id: nanoid(),
					texture: state.texture,
					pos: [x, y, z],
				},
			],
		}));
	},
	removeCube: (id) => {
		set((state) => ({
			cubes: state.cubes.filter((cube) => cube.id !== id),
		}));
	},
	setTexture: (texture) => {
		set(() => ({ texture }));
	},
	saveWorld: () => {
		set((prev) => {
			setLocalStorage('cubes', prev.cubes);
		});
	},
	resetWorld: () => {
		set(() => ({
			cubes: [],
		}));
	},
	setJoystickPosition: () => {
		set(() => ({
			joystickPosition: { x: 0, y: 0 },
			setJoystickPosition: (x, y) => ({ joystickPosition: { x, y } }),
		}));
	},
}));
