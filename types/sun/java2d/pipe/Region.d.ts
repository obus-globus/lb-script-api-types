import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { Shape } from '../../../java/awt/Shape.d.ts'
import type { AffineTransform } from '../../../java/awt/geom/AffineTransform.d.ts'
import type { Rectangle2D } from '../../../java/awt/geom/Rectangle2D.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegionIterator } from '../../../sun/java2d/pipe/RegionIterator.d.ts'
import type { SpanIterator } from '../../../sun/java2d/pipe/SpanIterator.d.ts'
export class Region extends Object {
    static EMPTY_REGION: Region;
    static WHOLE_REGION: Region;
    static clipAdd(paramarg0: number, paramarg1: number): number;
    static clipRound(paramarg0: number): number;
    static clipScale(paramarg0: number, paramarg1: number): number;
    static dimAdd(paramarg0: number, paramarg1: number): number;
    static getInstance(paramarg0: number[]): Region;
    static getInstance(paramarg0: number[], paramarg1: SpanIterator): Region;
    static getInstance(paramarg0: Rectangle): Region;
    static getInstance(paramarg0: Shape, paramarg1: AffineTransform): Region;
    static getInstance(paramarg0: Region, paramarg1: boolean, paramarg2: Shape, paramarg3: AffineTransform): Region;
    static getInstance(paramarg0: Region, paramarg1: Shape, paramarg2: AffineTransform): Region;
    static getInstanceXYWH(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): Region;
    static getInstanceXYXY(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): Region;
    private constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    private constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number)
    // private bands: number[];
    // private endIndex: number;
    // private hix: number;
    // private hiy: number;
    // private lox: number;
    // private loy: number;
    // private appendSpan(arg0: number[]): void;
    // private appendSpans(arg0: SpanIterator): void;
    // private calcBBox(): void;
    clipBoxToBounds(arg0: number[]): void;
    contains(arg0: number, arg1: number): boolean;
    encompasses(arg0: Region): boolean;
    encompassesXYWH(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    encompassesXYXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    // private endRow(arg0: number[]): void;
    equals(arg0: Object | null): boolean;
    filter(arg0: SpanIterator): SpanIterator;
    // private filterSpans(arg0: Region, arg1: Region, arg2: number): void;
    getBounds(arg0: number[]): void;
    getBoundsIntersection(arg0: Rectangle): Region;
    getBoundsIntersection(arg0: Region): Region;
    getBoundsIntersectionXYWH(arg0: number, arg1: number, arg2: number, arg3: number): Region;
    getBoundsIntersectionXYXY(arg0: number, arg1: number, arg2: number, arg3: number): Region;
    getDifference(arg0: Region): Region;
    getExclusiveOr(arg0: Region): Region;
    getHeight(): number;
    getHiX(): number;
    getHiY(): number;
    getIntersection(arg0: Rectangle): Region;
    getIntersection(arg0: Rectangle2D): Region;
    getIntersection(arg0: Region): Region;
    getIntersectionXYWH(arg0: number, arg1: number, arg2: number, arg3: number): Region;
    getIntersectionXYXY(arg0: number, arg1: number, arg2: number, arg3: number): Region;
    getIntersectionXYXY(arg0: number, arg1: number, arg2: number, arg3: number): Region;
    getIterator(): RegionIterator;
    getLoX(): number;
    getLoY(): number;
    // private getSafeTranslatedRegion(arg0: number, arg1: number): Region;
    getScaledRegion(arg0: number, arg1: number): Region;
    getSpanIterator(): SpanIterator;
    getSpanIterator(arg0: number[]): SpanIterator;
    getTranslatedRegion(arg0: number, arg1: number): Region;
    getUnion(arg0: Region): Region;
    getWidth(): number;
    hashCode(): number;
    intersectsQuickCheck(arg0: Region): boolean;
    intersectsQuickCheckXYXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    isEmpty(): boolean;
    isInsideQuickCheck(arg0: Region): boolean;
    isInsideXYWH(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    isInsideXYXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    isRectangular(): boolean;
    // private needSpace(arg0: number): void;
    toString(): string;
}