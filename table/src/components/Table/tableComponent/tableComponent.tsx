import { TableRow } from "../tableRow/tableRow"

export const TableComponent = () => {
    const data = [{
        eventId: '1',
        event: {
            eventDetails: {
                eventType: 'Purchase',
                eventDate: '06/17/2020 at 7:13 PM PDT',
                eventAddInfo: '$120.00'
            },
            advocate: {
                advocateContact: 'autouser23926@gmail.com',
                advocateType: 'Advocate'
            },
            friend: {
                friendContact: 'fr5872@gmail.com',
                friendType: 'Friend'
            },
            status: {
                currentStatus: 'Pending',
                reason: 'Passed fraud checks',
                isFraud: false
            }
        }
    },
    {
        eventId: '2',
        event: {
            eventDetails: {
                eventType: 'Purchase',
                eventDate: '07/10/2020 at 4:05 AM PDT',
                eventAddInfo: '$100.00'
            },
            advocate: {
                advocateContact: 'ad0379118142@gmail.com',
                advocateType: 'Advocate'
            },
            friend: {
                friendContact: 'fr0379118142@gmail.com',
                friendType: 'Friend'
            },
            status: {
                currentStatus: 'Flagged',
                reason: 'Marked as fraud',
                isFraud: true
            }
        }
    },
    {
        eventId: '3',
        event: {
            eventDetails: {
                eventType: 'Purchase',
                eventDate: '06/09/2020 at 12:42 PM PDT',
                eventAddInfo: '$120.00'
            },
            advocate: {
                advocateContact: 'ad566991@gmail.com',
                advocateType: 'Advocate'
            },
            friend: {
                friendContact: 'fr94250@gmail.com',
                friendType: 'Friend'
            },
            status: {
                currentStatus: 'Approved',
                reason: 'Passed fraud checks',
                isFraud: false
            }
        }
    },
    {
        eventId: '4',
        event: {
            eventDetails: {
                eventType: 'Purchase',
                eventDate: '08/07/2020 at 4:20 AM PDT',
                eventAddInfo: '$120.00'
            },
            advocate: {
                advocateContact: 'user.to.be.blocked92187@gmail.com',
                advocateType: 'Advocate'
            },
            friend: {
                friendContact: 'user.to.be.blocked2682@gmail.com',
                friendType: 'Friend'
            },
            status: {
                currentStatus: 'Blocked',
                reason: 'Marked as Fraud',
                isFraud: true
            }
        }
    },
    {
        eventId: '5',
        event: {
            eventDetails: {
                eventType: 'Purchase',
                eventDate: '06/09/2020 at 2:08 AM PDT',
                eventAddInfo: '$120.00'
            },
            advocate: {
                advocateContact: 'ad0693677382@gmail.com',
                advocateType: 'Advocate'
            },
            friend: {
                friendContact: 'fr0693677382@gmail.com',
                friendType: 'Friend'
            },
            status: {
                currentStatus: 'Voided',
                reason: 'Marked as fraud',
                isFraud: true
            }
        }
    }
]

    return (
        <table>
            <tr>
                <th>Referral event</th>
                <th>Advocate</th>
                <th>Friend</th>
                <th>Referal status</th>
            </tr>
            {data.map((singleEvent)=>{
                return <TableRow key={singleEvent.eventId}
                                 eventDetails={singleEvent.event.eventDetails} 
                                 advocate={singleEvent.event.advocate}
                                 friend={singleEvent.event.friend}
                                 status={singleEvent.event.status}/>
            })}
        </table>
    )
}