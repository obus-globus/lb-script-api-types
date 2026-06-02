import type { Object } from '../../../../java/lang/Object.d.ts'
export class MinecraftProfileTexture extends Object {
    static PROFILE_TEXTURE_COUNT: number;
    constructor(arg0: string, arg1: { [key: string]: string })
    // private metadata: { [key: string]: string };
    readonly url: string;
    getHash(): string;
    getMetadata(arg0: string): string;
    getUrl(): string;
    toString(): string;
}