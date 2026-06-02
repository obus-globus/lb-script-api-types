import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
export class SectionOcclusionGraph$Node extends Object {
    private constructor(section: SectionRenderDispatcher$RenderSection, sourceDirection: Direction, step: number)
    // private directions: number;
    // private section: SectionRenderDispatcher$RenderSection;
    // private sourceDirections: number;
    step: number;
    // private addSourceDirection(direction: Direction): void;
    equals(obj: Object | null): boolean;
    // private hasDirection(direction: Direction): boolean;
    hasSourceDirection(directionOrdinal: number): boolean;
    // private hasSourceDirections(): boolean;
    hashCode(): number;
    // private setDirections(oldDirections: number, direction: Direction): void;
}