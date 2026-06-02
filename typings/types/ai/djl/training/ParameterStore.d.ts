import type { Device } from '../../../ai/djl/Device.d.ts'
import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { Parameter } from '../../../ai/djl/nn/Parameter.d.ts'
import type { ParameterServer } from '../../../ai/djl/training/ParameterServer.d.ts'
import type { ParameterStore$ParameterData } from '../../../ai/djl/training/ParameterStore$ParameterData.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ParameterStore extends Object {
    constructor()
    constructor(arg0: NDManager, arg1: boolean)
    // private copy: boolean;
    // private deviceMap: Map<Device, number>;
    readonly manager: NDManager;
    // private parameterMap: { [key: string]: ParameterStore$ParameterData };
    // private parameterServer: ParameterServer;
    getManager(): NDManager;
    getValue(arg0: Parameter, arg1: Device, arg2: boolean): NDArray;
    setParameterServer(arg0: ParameterServer, arg1: Device[]): void;
    sync(): void;
    updateAllParameters(): void;
}