import type { PropertyChangeListener } from '../../java/beans/PropertyChangeListener.d.ts'
import type { PropertyChangeSupport } from '../../java/beans/PropertyChangeSupport.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Accessible } from '../../javax/accessibility/Accessible.d.ts'
import type { AccessibleAction } from '../../javax/accessibility/AccessibleAction.d.ts'
import type { AccessibleComponent } from '../../javax/accessibility/AccessibleComponent.d.ts'
import type { AccessibleEditableText } from '../../javax/accessibility/AccessibleEditableText.d.ts'
import type { AccessibleIcon } from '../../javax/accessibility/AccessibleIcon.d.ts'
import type { AccessibleRelationSet } from '../../javax/accessibility/AccessibleRelationSet.d.ts'
import type { AccessibleRole } from '../../javax/accessibility/AccessibleRole.d.ts'
import type { AccessibleSelection } from '../../javax/accessibility/AccessibleSelection.d.ts'
import type { AccessibleStateSet } from '../../javax/accessibility/AccessibleStateSet.d.ts'
import type { AccessibleTable } from '../../javax/accessibility/AccessibleTable.d.ts'
import type { AccessibleText } from '../../javax/accessibility/AccessibleText.d.ts'
import type { AccessibleValue } from '../../javax/accessibility/AccessibleValue.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AppContext } from '../../sun/awt/AppContext.d.ts'
export abstract class AccessibleContext extends Object {
    static ACCESSIBLE_ACTION_PROPERTY: string;
    static ACCESSIBLE_ACTIVE_DESCENDANT_PROPERTY: string;
    static ACCESSIBLE_CARET_PROPERTY: string;
    static ACCESSIBLE_CHILD_PROPERTY: string;
    static ACCESSIBLE_COMPONENT_BOUNDS_CHANGED: string;
    static ACCESSIBLE_DESCRIPTION_PROPERTY: string;
    static ACCESSIBLE_HYPERTEXT_OFFSET: string;
    static ACCESSIBLE_INVALIDATE_CHILDREN: string;
    static ACCESSIBLE_NAME_PROPERTY: string;
    static ACCESSIBLE_SELECTION_PROPERTY: string;
    static ACCESSIBLE_STATE_PROPERTY: string;
    static ACCESSIBLE_TABLE_CAPTION_CHANGED: string;
    static ACCESSIBLE_TABLE_COLUMN_DESCRIPTION_CHANGED: string;
    static ACCESSIBLE_TABLE_COLUMN_HEADER_CHANGED: string;
    static ACCESSIBLE_TABLE_MODEL_CHANGED: string;
    static ACCESSIBLE_TABLE_ROW_DESCRIPTION_CHANGED: string;
    static ACCESSIBLE_TABLE_ROW_HEADER_CHANGED: string;
    static ACCESSIBLE_TABLE_SUMMARY_CHANGED: string;
    static ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED: string;
    static ACCESSIBLE_TEXT_PROPERTY: string;
    static ACCESSIBLE_VALUE_PROPERTY: string;
    static ACCESSIBLE_VISIBLE_DATA_PROPERTY: string;
    constructor()
    // private accessibleChangeSupport: PropertyChangeSupport;
    accessibleDescription: string;
    accessibleName: string;
    accessibleParent: Accessible;
    // private nativeAXResource: Object;
    // private relationSet: AccessibleRelationSet;
    // private targetAppContext: AppContext;
    addPropertyChangeListener(arg0: PropertyChangeListener): void;
    firePropertyChange(arg0: string, arg1: Object, arg2: Object): void;
    getAccessibleAction(): AccessibleAction;
    getAccessibleChild(arg0: number): Accessible;
    getAccessibleChildrenCount(): number;
    getAccessibleComponent(): AccessibleComponent;
    getAccessibleDescription(): string;
    getAccessibleEditableText(): AccessibleEditableText;
    getAccessibleIcon(): AccessibleIcon[];
    getAccessibleIndexInParent(): number;
    getAccessibleName(): string;
    getAccessibleParent(): Accessible;
    getAccessibleRelationSet(): AccessibleRelationSet;
    getAccessibleRole(): AccessibleRole;
    getAccessibleSelection(): AccessibleSelection;
    getAccessibleStateSet(): AccessibleStateSet;
    getAccessibleTable(): AccessibleTable;
    getAccessibleText(): AccessibleText;
    getAccessibleValue(): AccessibleValue;
    getLocale(): Locale;
    removePropertyChangeListener(arg0: PropertyChangeListener): void;
    setAccessibleDescription(arg0: string): void;
    setAccessibleName(arg0: string): void;
    setAccessibleParent(arg0: Accessible): void;
}