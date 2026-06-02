import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { SoftInterface$Remap } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/hard/data/SoftInterface$Remap.d.ts'
export class SoftInterface extends Object {
    constructor()
    readonly prefix: string;
    readonly remap: SoftInterface$Remap;
    readonly target: string;
    getPrefix(): string;
    getRemap(): SoftInterface$Remap;
    getTarget(): string;
    setPrefix(arg0: string): void;
    setRemap(arg0: SoftInterface$Remap): void;
    setTarget(arg0: string): void;
    toString(): string;
}