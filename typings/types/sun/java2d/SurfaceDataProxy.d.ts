import type { Color } from '../../java/awt/Color.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { DisplayChangedListener } from '../../sun/awt/DisplayChangedListener.d.ts'
import type { SurfaceManager$FlushableCacheData } from '../../sun/awt/image/SurfaceManager$FlushableCacheData.d.ts'
import type { StateTracker } from '../../sun/java2d/StateTracker.d.ts'
import type { SurfaceData } from '../../sun/java2d/SurfaceData.d.ts'
import type { CompositeType } from '../../sun/java2d/loops/CompositeType.d.ts'
export abstract class SurfaceDataProxy extends Object implements DisplayChangedListener, SurfaceManager$FlushableCacheData {
    static UNCACHED: SurfaceDataProxy;
    static isCachingAllowed(): boolean;
    constructor()
    constructor(arg0: number)
    // private cacheTracker: StateTracker;
    // private cachedSD: SurfaceData;
    // private numtries: number;
    // private srcTracker: StateTracker;
    // private threshold: number;
    readonly valid: boolean;
    activateDisplayListener(): void;
    displayChanged(): void;
    flush(): void;
    flush(arg0: boolean): boolean;
    getRetryTracker(arg0: SurfaceData): StateTracker;
    invalidate(): void;
    isAccelerated(): boolean;
    isSupportedOperation(arg0: SurfaceData, arg1: number, arg2: CompositeType, arg3: Color): boolean;
    isValid(): boolean;
    paletteChanged(): void;
    replaceData(arg0: SurfaceData, arg1: number, arg2: CompositeType, arg3: Color): SurfaceData;
    updateSurfaceData(arg0: SurfaceData, arg1: SurfaceData, arg2: number, arg3: number): void;
    updateSurfaceDataBg(arg0: SurfaceData, arg1: SurfaceData, arg2: number, arg3: number, arg4: Color): void;
    validateSurfaceData(arg0: SurfaceData, arg1: SurfaceData, arg2: number, arg3: number): SurfaceData;
}