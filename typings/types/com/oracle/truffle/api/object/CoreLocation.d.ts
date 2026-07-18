import type { LocationImpl } from '../../../../../com/oracle/truffle/api/object/LocationImpl.d.ts'
export abstract class CoreLocation extends LocationImpl {
    constructor()
    isDoubleLocation(): boolean;
    isIntLocation(): boolean;
    isLongLocation(): boolean;
    isObjectLocation(): boolean;
    toString(): string;
}