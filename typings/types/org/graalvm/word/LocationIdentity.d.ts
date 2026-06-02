import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class LocationIdentity extends Object {
    static ANY_LOCATION: LocationIdentity;
    static INIT_LOCATION: LocationIdentity;
    static any(): LocationIdentity;
    static init(): LocationIdentity;
    constructor()
    isAny(): boolean;
    isImmutable(): boolean;
    isInit(): boolean;
    isMutable(): boolean;
    isSingle(): boolean;
    overlaps(other: LocationIdentity): boolean;
}