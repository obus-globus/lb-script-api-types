import type { Object } from '../../../java/lang/Object.d.ts'
import type { ParkingState } from '../../../kotlinx/atomicfu/locks/ParkingState.d.ts'
export class Free extends Object implements ParkingState {
    static INSTANCE: Free;
}