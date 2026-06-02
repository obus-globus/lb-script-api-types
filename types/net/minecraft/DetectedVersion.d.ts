import type { Object } from '../../java/lang/Object.d.ts'
import type { WorldVersion } from '../../net/minecraft/WorldVersion.d.ts'
export class DetectedVersion extends Object {
    static BUILT_IN: WorldVersion;
    static createBuiltIn(paramid: string, paramname: string): WorldVersion;
    static createBuiltIn(paramid: string, paramname: string, paramstable: boolean): WorldVersion;
    static tryDetectVersion(): WorldVersion;
    constructor()
}