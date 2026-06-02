import type { Object } from '../../java/lang/Object.d.ts'
export interface Firmware extends Object{
    getDescription(): string;
    getManufacturer(): string;
    getName(): string;
    getReleaseDate(): string;
    getVersion(): string;
}