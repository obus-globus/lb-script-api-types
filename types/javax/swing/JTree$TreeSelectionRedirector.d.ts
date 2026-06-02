import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { TreeSelectionEvent } from '../../javax/swing/event/TreeSelectionEvent.d.ts'
import type { TreeSelectionListener } from '../../javax/swing/event/TreeSelectionListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class JTree$TreeSelectionRedirector extends Object implements Serializable, TreeSelectionListener {
    constructor(null_: JTree$TreeSelectionRedirector)
    valueChanged(arg0: TreeSelectionEvent): void;
}