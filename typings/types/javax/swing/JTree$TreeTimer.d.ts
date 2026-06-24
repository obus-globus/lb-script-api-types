import type { ActionEvent } from '../../java/awt/event/ActionEvent.d.ts'
import type { JTree } from '../../javax/swing/JTree.d.ts'
import type { Timer } from '../../javax/swing/Timer.d.ts'
export class JTree$TreeTimer extends Timer {
    static getLogTimers(): boolean;
    static setLogTimers(paramarg0: boolean): void;
    constructor(null_: JTree)
    fireActionPerformed(arg0: ActionEvent): void;
}