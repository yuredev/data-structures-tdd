import Queue from '../structures/queue';

/**
 * Merge two queues
 * @param {Queue} queue1 
 * @param {Queue} queue2
 * @returns {Queue} The queue merged
 */
export default (queue1, queue2) => {
  const mergedQueue = new Queue(queue1.maxSize + queue2.maxSize);
  while (!queue1.isEmpty()) {
    mergedQueue.enqueue(queue1.dequeue());
    mergedQueue.enqueue(queue2.dequeue());
  }
  return mergedQueue;
}