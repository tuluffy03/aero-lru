import {LinkedLink} from './DLinkedList';
import DLinkedList from './DLinkedList';

export class Lru<K, V extends K> {
    map: Map<K, V>;
    dLinkedList: LinkedLink<V>;

    constructor() {
        this.map = new Map<K, V>();
        this.dLinkedList = (new DLinkedList<V>()).init();
    }

    getter(key: K) {
        const isExist = this.map.has(key);

        if (isExist) {
            /**
             * 将当前节点移动到头节点的位置
             */

            return this.map.get(key);
        }

        return undefined;
    }

    setter(key: K) {
        /* 如果容量超过了最大限制，删除尾节点 */

        /* 将新节点插入到头部 */
    }
}