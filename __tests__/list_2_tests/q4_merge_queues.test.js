import Queue from '../../structures/queue';
import mergeQueues from '../../list_2_queues_and_lists/q4_merge_queues';

test('Merge queues test', () => {
  const queue1 = new Queue(10);
  queue1.enqueue('A');
  queue1.enqueue('B');
  queue1.enqueue('C');
  queue1.enqueue('D');
  queue1.enqueue('E');
  const queue2 = new Queue(10);
  queue2.enqueue(1);
  queue2.enqueue(2);
  queue2.enqueue(3);
  queue2.enqueue(4);
  queue2.enqueue(5);
  const mergedQueue = mergeQueues(queue1, queue2);
  expect(mergedQueue.toString()).toBe(
    '[A,1,B,2,C,3,D,4,E,5]'
  );
})
