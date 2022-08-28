import * as React from 'react';
import smalltau from './images/smalltau.jpg';
import Alert from 'reactstrap/lib/Alert';

export const prayerRequestsPath = '/prayer-requests';

interface IPrayerRequestResult {
    ok: boolean;
    text: string;
}

const initialState = {
    message: undefined as IPrayerRequestResult | undefined,
    requestPrayFor: '',
    requestEmail: '',
    formSubmitAttempted: false
};

export class PrayerRequests extends React.Component<{}, typeof initialState> {
    state = initialState;

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const requestEmail = event.target.value;
        this.setState(() => ({ requestEmail }));
    };

    handlePrayForChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const requestPrayFor = event.target.value;
        this.setState(() => ({ requestPrayFor }));
    };

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState(() => ({
            formSubmitAttempted: true,
            message: {
                ok: true,
                text: 'Sending...'
            }
        }));

        try {
            const rawResponse = await fetch('/api/PrayerRequest', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: this.state.requestEmail, prayFor: this.state.requestPrayFor })
            });
            const message: IPrayerRequestResult = await rawResponse.json();

            this.setState(() => ({
                message
            }));
        } catch (err) {
            this.setState(() => ({
                message: {
                    ok: false,
                    text: 'Sorry your prayer request was not sent'
                }
            }));
        }
    };

    render() {
        const { requestPrayFor, requestEmail, formSubmitAttempted, message } = this.state;
        return (
            <>
                <h3>Prayer Requests</h3>

                <p>If you would like to ask the community to pray for a special intention mail us a prayer request:</p>

                {message && (
                    <Alert color={message.ok ? 'success' : 'danger'}>
                        <img className="img-thumbnail" src={smalltau} alt={message.ok ? 'success' : 'failure'} />
                        {message.text}
                    </Alert>
                )}

                <form name="form" noValidate onSubmit={this.handleSubmit}>
                    <div
                        className={`form-group has-feedback ${formSubmitAttempted && !requestEmail ? 'has-error' : ''}`}
                    >
                        <label className="control-label">Email address</label>
                        <input
                            name="emailAddr"
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={requestEmail}
                            onChange={this.handleEmailChange}
                            required
                        />
                        {formSubmitAttempted && !requestEmail && <span>Tell us your email.</span>}
                    </div>
                    <div>
                        <label className="control-label">Your prayer request</label>
                        <textarea
                            name="prayForText"
                            className="form-control"
                            rows={3}
                            placeholder="Enter prayer request"
                            value={requestPrayFor}
                            onChange={this.handlePrayForChange}
                            required
                        />
                        {formSubmitAttempted && !requestPrayFor && <span>You must tell us something to pray for!</span>}
                    </div>
                    <button disabled={!requestEmail || !requestPrayFor} type="submit" className="btn btn-primary">
                        Send us your prayer request
                    </button>
                </form>

                <p>
                    Although you may only receive a standardised reply, you can be confident that we will indeed pray.
                </p>
            </>
        );
    }
}
