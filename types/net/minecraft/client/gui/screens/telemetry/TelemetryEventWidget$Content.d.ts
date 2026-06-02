import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../net/minecraft/client/gui/layouts/Layout.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class TelemetryEventWidget$Content extends Record {
    private constructor(container: Layout, narration: Component)
    // private container: Layout;
    // private narration: Component;
    container(): Layout;
    equals(o: Object | null): boolean;
    hashCode(): number;
    narration(): Component;
    toString(): string;
}