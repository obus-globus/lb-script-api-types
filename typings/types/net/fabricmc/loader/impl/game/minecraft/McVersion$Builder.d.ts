import type { OptionalInt } from '../../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { McVersion } from '../../../../../../net/fabricmc/loader/impl/game/minecraft/McVersion.d.ts'
export class McVersion$Builder extends Object {
    constructor()
    // private classVersion: OptionalInt;
    // private id: string;
    // private name: string;
    // private release: string;
    // private version: string;
    build(): McVersion;
    setClassVersion(arg0: number): McVersion$Builder;
    setFromFileName(arg0: string): McVersion$Builder;
    setId(arg0: string): McVersion$Builder;
    setName(arg0: string): McVersion$Builder;
    setNameAndRelease(arg0: string): McVersion$Builder;
    setRelease(arg0: string): McVersion$Builder;
    setVersion(arg0: string): McVersion$Builder;
}