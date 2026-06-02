import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Environment } from '../../../../../com/viaversion/viaversion/api/minecraft/Environment.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClientWorld extends Object implements StorableObject {
    constructor()
    constructor(arg0: Environment)
    readonly environment: Environment;
    getEnvironment(): Environment;
    onRemove(): void;
    setEnvironment(arg0: number): boolean;
}