import React, { FunctionComponent } from 'react';
import { SpecialEvent } from './events';

type Props = {
  event: SpecialEvent;
};

const EventRow: FunctionComponent<Props> = ({ event }) => (
  <tr className="bg-white">
    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
      {event.name}
    </td>
    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {event.month} { event.day}
    </td>
    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
      {event.type}
    </td>
  </tr>
);

export default EventRow;