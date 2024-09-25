import { writable } from "svelte/store";

export const playing_song = writable(0);
export const is_logged_in = writable(0);