import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-router';
import NotFound from './not-found';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();
describe('Component: NotFound', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <NotFound/>
      </HistoryRouter>,
    );

    const headerElement = screen.getByText('404');
    const linkElement = screen.getByText('Вернуться на главную страницу');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

  it('should redirect to root URL when user clicked to link', async () => {
    history.push('/fake');

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<h1>This is main page</h1>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
