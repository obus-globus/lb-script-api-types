import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PlatformCode extends Object {
    static checkModCompatibility(): void;
    static getConfigDirectory(): Path[][];
    static getModVersion(paramarg0: string): Optional<string>;
    constructor()
}