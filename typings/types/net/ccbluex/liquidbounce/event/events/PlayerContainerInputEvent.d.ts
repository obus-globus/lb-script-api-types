import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { ContainerInput } from '../../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
export class PlayerContainerInputEvent extends CancellableEvent {
    constructor(containerId: number, slot: number, button: number, input: ContainerInput)
    readonly button: number;
    readonly containerId: number;
    readonly input: ContainerInput;
    readonly slot: number;
}