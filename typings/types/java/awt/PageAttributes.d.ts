import type { PageAttributes$ColorType } from '../../java/awt/PageAttributes$ColorType.d.ts'
import type { PageAttributes$MediaType } from '../../java/awt/PageAttributes$MediaType.d.ts'
import type { PageAttributes$OrientationRequestedType } from '../../java/awt/PageAttributes$OrientationRequestedType.d.ts'
import type { PageAttributes$OriginType } from '../../java/awt/PageAttributes$OriginType.d.ts'
import type { PageAttributes$PrintQualityType } from '../../java/awt/PageAttributes$PrintQualityType.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class PageAttributes extends Object implements Cloneable {
    constructor()
    constructor(arg0: PageAttributes)
    constructor(arg0: PageAttributes$ColorType, arg1: PageAttributes$MediaType, arg2: PageAttributes$OrientationRequestedType, arg3: PageAttributes$OriginType, arg4: PageAttributes$PrintQualityType, arg5: number[])
    readonly color: PageAttributes$ColorType;
    readonly media: PageAttributes$MediaType;
    readonly orientationRequested: PageAttributes$OrientationRequestedType;
    readonly origin: PageAttributes$OriginType;
    readonly printQuality: PageAttributes$PrintQualityType;
    readonly printerResolution: number[];
    clone(): Object;
    equals(arg0: Object | null): boolean;
    getColor(): PageAttributes$ColorType;
    getMedia(): PageAttributes$MediaType;
    getOrientationRequested(): PageAttributes$OrientationRequestedType;
    getOrigin(): PageAttributes$OriginType;
    getPrintQuality(): PageAttributes$PrintQualityType;
    getPrinterResolution(): number[];
    hashCode(): number;
    set(arg0: PageAttributes): void;
    setColor(arg0: PageAttributes$ColorType): void;
    setMedia(arg0: PageAttributes$MediaType): void;
    setMediaToDefault(): void;
    setOrientationRequested(arg0: PageAttributes$OrientationRequestedType): void;
    setOrientationRequested(arg0: number): void;
    setOrientationRequestedToDefault(): void;
    setOrigin(arg0: PageAttributes$OriginType): void;
    setPrintQuality(arg0: PageAttributes$PrintQualityType): void;
    setPrintQuality(arg0: number): void;
    setPrintQualityToDefault(): void;
    setPrinterResolution(arg0: number): void;
    setPrinterResolution(arg0: number[]): void;
    setPrinterResolutionToDefault(): void;
    toString(): string;
}