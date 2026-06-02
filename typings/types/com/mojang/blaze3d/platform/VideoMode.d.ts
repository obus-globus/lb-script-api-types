import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GLFWVidMode } from '../../../../org/lwjgl/glfw/GLFWVidMode.d.ts'
export class VideoMode extends Object {
    static read(params: string): Optional<VideoMode>;
    constructor(width: number, height: number, redBits: number, greenBits: number, blueBits: number, refreshRate: number)
    constructor(mode: GLFWVidMode)
    constructor(buffer: (Object | null)[])
    readonly blueBits: number;
    readonly greenBits: number;
    readonly height: number;
    readonly redBits: number;
    readonly refreshRate: number;
    readonly width: number;
    equals(o: Object | null): boolean;
    getBlueBits(): number;
    getGreenBits(): number;
    getHeight(): number;
    getRedBits(): number;
    getRefreshRate(): number;
    getWidth(): number;
    hashCode(): number;
    toString(): string;
    write(): string;
}