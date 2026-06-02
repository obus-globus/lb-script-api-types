import type { Object } from '../../../java/lang/Object.d.ts'
export class License extends Object {
    static apache(): License;
    constructor()
    readonly id: string;
    readonly name: string;
    readonly url: string;
    getId(): string;
    getName(): string;
    getUrl(): string;
    setId(arg0: string): void;
    setName(arg0: string): void;
    setUrl(arg0: string): void;
}