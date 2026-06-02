import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackSource } from '../../../../../net/minecraft/server/packs/repository/PackSource.d.ts'
export class PackSourceTracker extends Object {
    static getSource(paramarg0: PackResources): PackSource;
    static setSource(paramarg0: PackResources, paramarg1: PackSource): void;
    constructor()
}