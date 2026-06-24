import type { DeviceFeatures } from '../../../../com/mojang/blaze3d/systems/DeviceFeatures.d.ts'
import type { DeviceLimits } from '../../../../com/mojang/blaze3d/systems/DeviceLimits.d.ts'
import type { DeviceType } from '../../../../com/mojang/blaze3d/systems/DeviceType.d.ts'
import type { HintsAndWorkarounds } from '../../../../com/mojang/blaze3d/systems/HintsAndWorkarounds.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DeviceInfo extends Record {
    constructor(name: string, vendorName: string, driverInfo: string, isZZeroToOne: boolean, backendName: string, timestampPeriod: number, limits: DeviceLimits, features: DeviceFeatures, underlyingExtensions: string[], hintsAndWorkarounds: HintsAndWorkarounds, type: DeviceType)
    // private backendName: string;
    // private driverInfo: string;
    // private features: DeviceFeatures;
    // private hintsAndWorkarounds: HintsAndWorkarounds;
    // private isZZeroToOne: boolean;
    // private limits: DeviceLimits;
    // private name: string;
    // private timestampPeriod: number;
    // private type: DeviceType;
    // private underlyingExtensions: string[];
    // private vendorName: string;
    backendName(): string;
    driverInfo(): string;
    equals(o: Object | null): boolean;
    features(): DeviceFeatures;
    hashCode(): number;
    hintsAndWorkarounds(): HintsAndWorkarounds;
    isZZeroToOne(): boolean;
    limits(): DeviceLimits;
    name(): string;
    timestampPeriod(): number;
    toString(): string;
    type(): DeviceType;
    underlyingExtensions(): string[];
    vendorName(): string;
}