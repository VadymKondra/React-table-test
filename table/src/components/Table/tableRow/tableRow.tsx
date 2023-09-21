import { FC } from "react";


type TableRowProps = {
    eventDetails: {
        eventType: string,
        eventDate: string,
        eventAddInfo: string
    },
    advocate: {
        advocateContact: string,
        advocateType: string
    },
    friend: {
        friendContact: string,
        friendType: string
    },
    status: {
        currentStatus: string,
        reason: string,
        isFraud: boolean
    }
  };


export const TableRow: FC<TableRowProps> = ({eventDetails, advocate, friend, status}) => {
    return (
            <tr className="tableRow">
                <td>
                    <div>
                        <p className="boldText">{eventDetails.eventType}</p>
                        <p className="lightText">{eventDetails.eventDate}</p>
                        <p className="boldText">{eventDetails.eventAddInfo}</p>
                    </div>
                </td>
                <td>
                    <div className="cell">
                        <p className="boldText">{ advocate.advocateContact.length > 15 ? advocate.advocateContact.slice(0,14) + '...' : advocate.advocateContact}</p>
                        <p>{advocate.advocateType}</p>
                    </div>
                </td>
                <td>
                    <div className="cell">
                        <p className="boldText">{ friend.friendContact.length > 15 ? friend.friendContact.slice(0,14) + '...' : friend.friendContact}</p>
                        <p>{friend.friendType}</p>
                    </div>
                </td>
                <td>
                    <div className="cell">
                        <p className="boldText">{status.currentStatus}</p>
                        <p className={status.isFraud ? 'criticalWarningText' : 'lightText'}>{status.reason}</p>
                    </div>
                </td>
            </tr>
    )
}