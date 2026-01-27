import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import {
	TextInput,
	PasswordInput,
	Checkbox,
	Button,
	Group,
	Paper,
	Title,
	Text,
	Anchor,
	Container,
} from '@mantine/core';

type LoginValues = {
	email: string;
	password: string;
	remember: boolean;
};

const Login: React.FC = () => {
	const navigate = useNavigate();
	const form = useForm<LoginValues>({
		initialValues: { email: '', password: '', remember: false },
		validate: {
			email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email'),
			password: (value) => (value.length >= 6 ? null : 'Password must be at least 6 characters'),
		},
	});

	const handleSubmit = (values: LoginValues) => {
		// Replace with real auth integration
		// For now we just log the values
		// eslint-disable-next-line no-console
		console.log('Login submitted', values);
		navigate('/dashboard');
	};

	return (
		<Container size={420} my={40}>
			<Title ta="center">Welcome back</Title>
			<Text color="dimmed" size="sm" ta="center" mt={5}>
				Sign in to continue to the Pet Catalog
			</Text>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<form onSubmit={form.onSubmit(handleSubmit)}>
					<TextInput
						label="Email"
						placeholder="hello@example.com"
						required
						{...form.getInputProps('email')}
					/>

					<PasswordInput
						label="Password"
						placeholder="Your password"
						required
						mt="md"
						{...form.getInputProps('password')}
					/>

					<Group justify="space-between" mt="md">
						<Checkbox label="Remember me" {...form.getInputProps('remember', { type: 'checkbox' })} />
						<Anchor<'a'> href="#" onClick={(e) => e.preventDefault()} size="sm">
							Forgot password?
						</Anchor>
					</Group>

					<Button fullWidth mt="xl" type="submit">
						Sign in
					</Button>
				</form>
			</Paper>

			<Button fullWidth mt="md" onClick={() => navigate('/dashboard')}>
				Skip Login (Test)
			</Button>
		</Container>
	);
};

export default Login;
