export const prerender = true;
import { lecturas } from '../../helpers/lecturas.js';

export async function load() {
	
	return {lecturas};
}